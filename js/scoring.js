var redundancyAnswers = []
redundancyAnswers['yes'] = 1
redundancyAnswers['yes-with-errors'] = 2
redundancyAnswers['no'] = 3

var scalabilityAnswers = []
scalabilityAnswers['yes-automatic'] = 1
scalabilityAnswers['yes-manual'] = 2
scalabilityAnswers['no'] = 3

function getRedundancyScore () {
  var riskFactors = document.forms['riskfactors']
  var redundancyAnswer = riskFactors.elements['redundancy']
  var redundancyScore = redundancyAnswers[redundancyAnswer.value]
  return redundancyScore
}

function getScalabilityScore () {
  var riskFactors = document.forms['riskfactors']
  var scalabilityAnswer = riskFactors.elements['scalability']
  var scalabilityScore = scalabilityAnswers[scalabilityAnswer.value]
  return scalabilityScore
}

function calculateTotal () {
  var totalScore = getRedundancyScore() + getScalabilityScore()

  var divobj = document.getElementById('totalScore')
  divobj.style.display = 'block'
  divobj.innerHTML = 'Total is ' + totalScore
}
