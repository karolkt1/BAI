patient = {name: "John", age: 31, city: "New York"};

function submitClick() {
  
    // Przy rejestracji tworzymy dziennik usera
    db.collection("Dziennik pacjentow Karol").doc(patient.name).set({})
    
    db.collection("Dziennik pacjentow Karol").doc(patient.name).collection("Leki").doc("lek2").set({
      age: patient.age,
      city: patient.city
    })

  console.log("data sent")
}