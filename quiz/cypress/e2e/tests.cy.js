describe('Quiz App tests', () => {
  it('answers no correct questions', () => {
    cy.visit('http://localhost:3000/'); // Entro a la app

    // Pruebo primera pregunta
    cy.contains("Pregunta numero 1"). // Selecciono el titulo (a partir de su texto)
      should('exist'); // Me fijo que existe en el DOM, se esta mostrando
    cy.get('[data-testid="answerTextbox"]'). // Selecciono el input de respuesta (a partir del id de prueba)
      type("Respuesta incorrecta"); // Escribo en el una respuesta incorrecta
    cy.contains("Enviar"). // Encuentro el boton
      click(); // Lo clickeo
    cy.contains("Incorrecto :(").
      should('exist');

    // Pruebo segunda pregunta
    // NOTA: Al contestar una pregunta, se tarda 2 segundos en cargar la siguiente pregunta. Durante este tiempo,
    // cypress no va a encontrar, por ejemplo, el siguiente titulo. En este caso, en vez de fallar la prueba,
    // cypress sigue corriendo los tests hasta encontrar el elemento (o hasta que llegue al timeout, por defecto 4 segundos).
    // De cualquier forma, se puede usar cy.wait(milisegundosAEsperar);
    cy.contains("Pregunta numero 2"). 
      should('exist');
    cy.contains("WWE Championship"). // Agarro una opcion incorrecta
      click(); // La selecciono
    cy.contains("WWE Championship"). // La agarro de nuevo (se deberia haber re-renderizado)
      should('have.id', 'Wrong'); // Verifico que aparezca como incorrecta

    // Pantalla resultados
    cy.contains("Acertaste 0!").should('exist');
  });

  it('answers text question correct', () => {
    cy.visit('http://localhost:3000/');

    // Pruebo primera pregunta
    cy.get('[data-testid="answerTextbox"]'). 
      type("25-2"); // Ahora pongo respuesta correcta
    cy.contains("Enviar"). 
      click(); 
    cy.contains("Correcto!").
      should('exist');

    // Pruebo segunda pregunta
    cy.contains("WWE Championship"). // Agarro una opcion incorrecta
      click();
    cy.contains("WWE Championship").
      should('have.id', 'Wrong');

    // Pantalla resultados
    cy.contains("Acertaste 1!").should('exist');
  });

  it('answers multiple choice question correct', () => {
    cy.visit('http://localhost:3000/');

    // Pruebo primera pregunta
    cy.get('[data-testid="answerTextbox"]'). 
      type("Respuesta incorrecta");
    cy.contains("Enviar"). 
      click(); 
    cy.contains("Incorrecto :(").
      should('exist');

    // Pruebo segunda pregunta
    cy.contains("Intercontinental Championship"). // Agarro la opcion correcta
      click();
    cy.contains("Intercontinental Championship").
      should('have.id', 'Right');

    // Pantalla resultados
    cy.contains("Acertaste 1!").should('exist');
  });

  it('answers all questions right', () => {
    cy.visit('http://localhost:3000/');

    // Pruebo primera pregunta
    cy.get('[data-testid="answerTextbox"]'). 
      type("25-2");
    cy.contains("Enviar"). 
      click(); 
    cy.contains("Correcto!").
      should('exist');

    // Pruebo segunda pregunta
    cy.contains("Intercontinental Championship").
      click();
    cy.contains("Intercontinental Championship").
      should('have.id', 'Right');

    // Pantalla resultados
    cy.contains("Acertaste 2!").should('exist');
  });
});

// El siguiente test en realidad deberia ser de componente, no de E2E
// Por simplicidad lo pongo aca, todo junto
describe('Text Question tests', () => { 
  it('doesnt allow null answer', () => {
    cy.visit('http://localhost:3000/'); // Entro a la app
    
    cy.contains("Enviar"). // Encuentro el boton
      should("be.disabled"); // Checkeo que esta inactivo
  });

  it('does allow valid answer', () => {
    cy.visit('http://localhost:3000/'); // Entro a la app
    
    cy.get('[data-testid="answerTextbox"]'). 
      type("blablabla");
    cy.contains("Enviar"). 
      should("not.be.disabled"). 
      click();
    cy.contains("Incorrecto :(").
      should('exist');
  });

  it('gets disabled after erasing answer', () => {
    cy.visit('http://localhost:3000/'); // Entro a la app
    
    cy.get('[data-testid="answerTextbox"]'). 
      type("blablabla");
    cy.contains("Enviar"). 
      should("not.be.disabled"); 

    cy.get('[data-testid="answerTextbox"]'). 
      clear();
    cy.contains("Enviar"). 
      should("be.disabled");
  });
});