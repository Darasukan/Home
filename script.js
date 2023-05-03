function execBatchFile() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'caminho/do/arquivo.bat', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var shell = new ActiveXObject('WScript.Shell');
        shell.run(xhr.responseText, 1, true);
      }
    }
    xhr.send();
  }

  // teste com Javascript
