const citati = [
    "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.",
    "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.",
    "Neka ti udica bude uvek bačena. U jezeru u kojem najmanje očekuješ, pojaviće se riba.",
    "Preko noći postaje slavan samo onaj ko je danima neumorno radio.",
    "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može."
  ];
  
  function prikaziCitat() {
    const brojInput = prompt("Unesite ceo broj od 1 do 5?");
    const unosNumber = parseInt(brojInput);
  
    if (isNaN(unosNumber)) {
      alert("Niste uneli validan broj!");
    } else {
      if (unosNumber >= 1 && unosNumber <= 5) {
        document.getElementById("citatDiv").innerHTML = citati[unosNumber - 1];
      } else {
        alert("Broj mora biti između 1 i 5!");
      }
    }
  }