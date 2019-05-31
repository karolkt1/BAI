patient = {age: 31, city: "New York"};

function submitClick() {
  
    // Przy rejestracji tworzymy dziennik usera
    db.collection("Dziennik pacjentow Karol").doc(user.uid).set({})
    
    db.collection("Dziennik pacjentow Karol").doc(user.uid).collection("Leki").doc("lek2").set({
      age: patient.age,
      city: patient.city
    })

  console.log("data sent")
}