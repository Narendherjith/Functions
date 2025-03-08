// Online Food Delivery
function foodOrder() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Recieved");
        },1000);
    });
}

function preparingFood() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Food Prepared");
        },3000);
    });
}

function packingFood() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Food is Packed");
        },2000);
    });
}

function assigningDeliveryPerson() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Delivery Person is On the Way");
        },2000);
    });
}

function deliveringFood() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Food is Delivered");
        },4000);
    });
}

//  function Calling
foodOrder()
    .then(res => {console.log(res); return preparingFood();})
    .then(res => {console.log(res); return packingFood();})
    .then(res => {console.log(res); return assigningDeliveryPerson();})
    .then(res => {console.log(res); return deliveringFood();})
    .then(res => {console.log(res); })
    .catch(err => console.error(err));

    //  Movie Ticket Booking
function selectingSeats(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },2000);
    });
}    
function processingPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },3000);
    });
}
function generatingTicket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1000);
    });
}
function sendingConfirmationEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },2000);
    });
}

selectingSeats()
     .then( () => processingPayment() )
     .then( () => generatingTicket() )
     .then( () => sendingConfirmationEmail() )
     .then( () => { console.log("Booking Completed Sucessfully");})
     .catch( () => {
        console.error("An Error Occurred")
     })

     //  Car Service Center
function carCheckIn() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Car Check In Complete");
        },1000);
    });
}     
function oilChange() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Oil Changed");
        },2000);
    });
}
function engineCheck() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Engine Checked Successfully");
        },3000);
    });
}
function carWash() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Car Wash Done");
        },2000);
    });
}
function finalQualityCheck() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("The Car is Ready");
        },2000);
    });
}

carCheckIn()
    .then(res => {console.log(res); return oilChange();})
    .then(res => {console.log(res); return engineCheck()})
    .then(res => {console.log(res); return carWash()})
    .then(res => {console.log(res); return finalQualityCheck()})
    .then(res => {console.log(res)})
    .catch(err => {console.error(err)})

    //  Laptop Repair System
function diagnosingIssue(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },3000);
    });
}    
function replacingFaultyParts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },4000);
    });
}
function updatingSoftware() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },2000);
    });
}
function finalTesting() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },2000);
    });
}
function returingToCustomer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1000);
    });
}

diagnosingIssue()
     .then( () => replacingFaultyParts() )
     .then( () => updatingSoftware() )
     .then( () => finalTesting() )
     .then( () => returingToCustomer() )
     .then( () => { console.log("Laptop Repaired Sucessfully");})
     .catch( () => { console.error("An Error Occurred"); })

//  Online Course Enrollment
function checkCourseAvailability() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Checking Course Availability");
        },1000);
    });
}
function processingPayment() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Payment Successfull");
        },3000);
    });
}
function generatingEnrollmentId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your Enrollment Id is...");
        },1000);
    });
}
function sendingCourseMaterials() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Go Through the Course Materials");
        },2000);
    });
}
function grantingAcessToLiveClasses() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Granted Access To Live Classes");
        },2000);
    });
}

checkCourseAvailability()
     .then(res => { console.log(res); return processingPayment()})
     .then(res => {console.log(res); return generatingEnrollmentId()})
     .then(res => {console.log(res); return sendingCourseMaterials()})
     .then(res => {console.log(res); return grantingAcessToLiveClasses()})
     .then(res => {console.log(res)})
     .catch(err => {console.error(err)})