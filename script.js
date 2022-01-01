var division=document.createElement('div');
division.innerHTML=`<h2>Nisha sent u a wish..Please click on the button to view the gift</h2>
<button onclick='start()'>Click Me!</button>`;
document.body.append(division);

var deployTimer=function(callback) {
    division.innerHTML=`<h1>10</h1>`;
  callback();
}
var  nine=function(callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>9</h1>`;
    callback();
  }, 1 * 1000);
}
var eight=function (callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>8</h1>`;
    callback();
  }, 1 * 1000);
}
var seven=function (callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>7</h1>`;
    callback();
  }, 1 * 1000);
}
var six=function (callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>6</h1>`;
    callback();
  }, 1 * 1000);
}
var  five=function(callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>5</h1>`;
    callback();
  }, 1 * 1000);
}
var four=function(callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>4</h1>`;
    callback();
  }, 1 * 1000);
}

var  three=function(callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>3</h1>`;
    callback();
  }, 1 * 1000);
}

var two=function (callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>2</h1>`;
    callback();
  }, 1 * 1000);
}
var  one=function(callback) {
  setTimeout(() => {
    division.innerHTML=`<h1>1</h1>`;
    callback();
  }, 1 * 1000);
}
var start=function(){
    deployTimer(() => {
        nine(() => {
          eight(() => {
            seven(() => {
              six(() => {
                  five(() => {
                      four(() => {
                          three(() => {
                              two(() => {
                                  one(() => {
                                      setTimeout(() => {
                                          division.innerHTML=`<h1 class="final">Happy Independence Day!!! &#128512;</h1>`;                                  
                                        }, 1 * 1000);
                                      
                                  });
                              });
                          });
                      }); 
                    });
                });
            });
          });
        });
      });
}


