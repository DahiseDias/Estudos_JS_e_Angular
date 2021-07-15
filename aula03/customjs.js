var ids = [];

async function makeGet() {
  const options = {
    method: get,
  };

  const data = await fetch(urlGet, options);

  if (!data.ok) {
    return new Error();
  }
  
  return data.json();
}

async function makePost() {
  var body = createBody();

  console.log(body);

  const options = {
    method: get
  };

  const data = await fetch(urlPost, options);
  
  if (!data.ok) {
    return new Error();
  }
  
  return data;
}

function postInformations() {
  makePost()
  .then((data) => {
    console.log('post sucess!');
    console.log(data)
  })
  .catch((error) => console.log(errorMsg, error));
}

function getInformations() {
  makeGet()
    .then((data) => {
      if (!data) {
        return new Error();
      }

      fillInformations(data);
    })
    .catch((error) => console.log(errorMsg, error));
}

function fillInformations(data) {
  var inputName = document.getElementById(fullName);
  inputName.value = data.fullname;
  inputName.readOnly = true;

  var inputCellPhone = document.getElementById(cellPhone);
  inputCellPhone.value = data.cellPhone;
  inputCellPhone.readOnly = true;

  var divLanguages = document.getElementById(languagesDiv);

  var languages = data.languages;

  languages.forEach((element) => {
    let newInput = document.createElement(input);
    newInput.type = checkBox;
    newInput.id = element;

    let newLabel = document.createElement(label);
    newLabel.for = element;
    newLabel.innerHTML = element;
    newLabel.className = checkBoxFont;

    let newBr = document.createElement(br);

    divLanguages.appendChild(newInput);
    divLanguages.appendChild(newLabel);
    divLanguages.appendChild(newBr);

    ids.push(element);
  });
}

function createBody() {
  let name = document.getElementById(fullName).value;
  let phone = document.getElementById(cellPhone).value;
  let languages = [];

  ids.forEach(element => {
    var checboxInput = document.getElementById(element);

    if (checboxInput.checked) {
      languages.push(checboxInput.id);
    }
  })

  let body = {
    name,
    phone, 
    languages
  };
  
  return body;
}
