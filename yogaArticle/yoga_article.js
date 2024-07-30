var xhr = new XMLHttpRequest();
var url = './yoga.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    var content = xhr.response.content;
    var contentsDiv = document.getElementById('articles');

    content.forEach(function(cont){
        var contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        var title = document.createElement('h2');
        title.textContent = cont.headline;

        var description = document.createElement('p');
        description.textContent = cont.summary;

        var steps = document.createElement('h3');
        steps.textContent = 'Steps';

        var stepList = document.createElement('ul');
        cont.steps.forEach(function(step){
            var listItem = document.createElement('li');
            listItem.textContent = step;
            stepList.appendChild(listItem);
        });

        var advanList = document.createElement('ul');
        cont.advantages.forEach(function(advan){
            var listItem = document.createElement('li');
            listItem.textContent = advan;
            advanList.appendChild(listItem);
        });

        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(steps);
        contentDiv.appendChild(stepList);
        contentDiv.appendChild(advanList);

        contentsDiv.appendChild(contentDiv);

    });
}

xhr.send();