var GetTitle = function() {
    var annotationText= document.getElementById("snaplapse-annotation-description").innerHTML()
    document.getElementById("snaplapse-annotation-description").innerHTML=""
    return annotationText
}