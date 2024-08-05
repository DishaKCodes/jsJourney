function checkAccess(){
    const role = document.getElementById("role").value;
    let access = document.getElementById("output");
    switch (role) {
        case "Employee":
            access.innerHTML = "You are authorized to have access to 'Dietary Services'.";
            break;
        case "Enrolled Member":
            access.innerHTML = "You are authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician.";
            break;
        case "Subscriber":
            access.innerHTML = "You are authorized to have partial access to 'Dietary Services'.";
            break;
        case "Non-Subscriber":
            access.innerHTML = "You need to enroll or at least subscribe first to avail this facility.";
            break;
        default:
            access.innerHTML = "Invalid role. Please provide a valid role.";
            break;
    }

}