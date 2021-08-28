/*const circle = {
 radius: 1,
 location: {
     x: 1,
     y: 1
 },

 draw: function() {
     console.log('draw');
 }

};

circle.draw(); */

// factory function - returns an object
/* function createCircle(radius){
  return {  
    radius,
    draw: function(){
        console.log('draw');
        }
    };
}

 const circle = createCircle(1);
 circle.draw();

 // constructor function
 // similar to creating class
 function Circle(radius){
     this.radius = radius;
     this.draw = function () {
         console.log('draw');
     }
 }

    const another = new Circle(1);
    another.draw();

    const Circle1 = new Function('radius',`
        this.radius = radius;
        this.draw = function () {
        console.log('draw');
    }
    `);

    const circleNew = new Circle1(1);  // same as Circle.call({}, 1) or Circle.apply({}, [1,2,3]) */

    // reference

    /*
    let x = { value: 10};
    let y = x;

    x.value = 20;

    let number = 10;

    function increase(number) {
        number++;
    }

    increase(number);
    console.log(number);

    // in above case increment doesn't happen as number is a primitive type and only it's value is stored in the variable.

    let numberTwo = { value: 10};
    
    function increasetwo (numberTwo) {
        numberTwo.value++;
    }

    increasetwo(numberTwo);
    console.log(numberTwo);  */

    /*
    function Circle(radius){
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        }
    }
    

    const circle = new Circle(10);
*/

   /* we can dynamically add or delete new properties in javaScript
    circle.location = { x: 1};

    const propertyName = 'center-location';

    circle[propertyName] = {x: 1};

    delete circle.location;

    */

    /*
    accessing keys and values
    for (let key in circle){
        if (typeof circle[key] !== 'function')
            console.log(key, circle[key]);
    }

    const keys = Object.keys(circle);
    console.log(keys);

    if ('radius' in circle)
        console.log('circle has a radius');

        */

        // abstraction
        /*
        function Circle(radius){
            this.radius = radius;

            // this will keep the scope inside the circle and prevent from accessing outside    
            // not actually private, these are local variables
            let defaultLocation = { x: 0, y: 0};

            let computeOptimumLocation = function(factor){
                //...
                // will be accessible only inside the circle
            }

            this.draw = function () {

                computeOptimumLocation(0.1);

                defaultLocation.x = 5;
                this.radius = 2;

                console.log('draw');
            }

            Object.defineProperty(this, 'defaultLocation', {
                get: function(){
                    return defaultLocation;
                },
                set: function(value){
                    if (!value.x || !value.y)
                        throw new Error('Invalid circle location');
                }
            })
        }
        
    
        const circle = new Circle(10);
        circle.defaultLocation = {x: 1, y: 2};
        circle.draw();
        */
       function StopWatch(){
            let duration = 0;
            let state = '';

           let startTime;
           let stopTime;

           this.start = function() {
                if (state == 'start')
                    throw new Error('already started');
                state = 'start';   
                startTime = new Date(); 
                console.log('startTime',startTime);
                console.log('duration',duration);
           }
           this.stop = function() {
               if(state !== 'start')
                throw new Error('Not started');
               state = 'stop'; 
               stopTime = new Date();
               console.log('startTime',startTime);
               console.log('stopTime',stopTime);
               console.log('before duration', duration); 
               duration = duration + ((stopTime.getTime() - startTime.getTime())/1000);
               console.log('after duration',duration);
           }
           this.reset = function() {
                duration = 0;
                state = '';
                startTime = null;
                stopTime = null;
           }

           Object.defineProperty(this, 'duration', {
               get: function(){
                   return duration;
               }
           })
       }

       let sw = new StopWatch();
       