let joursemaines = prompt('Entrez le jour de la semaine !').toLowerCase();
if(joursemaines === "lundi"){
    alert('demain sera mardi');
}else if (userDay === "mardi"){
    alert('demain sera mercredi');
}else if (userDay === "mercredi"){
    alert('demain sera jeudi');
}else if (userDay === "jeudi"){
    alert('demain sera vendredi');
}else if (userDay === "vendredi"){
    alert('demain sera samedi');
}else if (userDay === "samedi"){
    alert('demain sera dimanche');
}else if (userDay === "dimanche"){
    alert('demain sera lundi');
}else {
    alert('Entrez un jour de la semaine correct');
}

switch(joursemaines){
    case 'lundi':
        alert('demain sera mardi');
        break;
    case 'mardi':
        alert('demain sera mercredi');
        break;
    case 'mercredi':
        alert('demain sera jeudi');
        break;
    case 'jeudi':
        alert('demain sera vendredi');
        break;
    case 'vendredi':
        alert('demain sera samedi');
        break;
    case 'samedi':
        alert('demain dimanche');
        break;
    case 'dimanche':
        alert('demain sera lundi');
        break;
    default:
        alert('Entrez un jour de la semaine correct');
}