function izaberiOperaciju(operacija) {
    const unos = prompt("Insert number between 1 and 999:");
    const unosNumber = parseFloat(unos);
  
    if (isNaN(unosNumber)) {
      alert("This is not a number!");
    } else if (unosNumber < 1 || unosNumber > 999) {
      alert("Number must be between 1 and 999!");
    } else {
      switch (operacija) {
        case 'SQRT':
          alert("Square root: " + Math.sqrt(unosNumber));
          break;
        case 'SIN':
          alert("Sinus: " + Math.sin(unosNumber));
          break;
        case 'COS':
          alert("Cosinus: " + Math.cos(unosNumber));
          break;
        case 'ROUND':
          alert("Round: " + Math.round(unosNumber));
          break;
        default:
          alert("Nepoznata operacija!");
          break;
      }
    }
  }