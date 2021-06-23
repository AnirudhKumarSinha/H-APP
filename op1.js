class op1
{
    constructor()
    {
      this.button=createButton('Health Check')
      this.faq=createButton('FAQ of COVID-19')
      this.pre=createButton('Preventive Measures Against Covid 19')
      this.home=createButton('Home')
      this.cold=createButton('Cold/Flu')
      this.ache1=createButton('Tooth Ache')
      this.ache2=createButton('Stomach Ache')
      this.red=createButton('Eye Redness')
      this.cold.hide();
      this.ache1.hide();
      this.ache2.hide();
      this.red.hide();

      this.cold2=createElement('h2')
      this.cold3=createElement('h2')
      this.cold2.hide();
      this.cold3.hide();

      this.tac1=createElement('h2')
      this.tac2=createElement('h2')
      this.tac1.hide();
      this.tac2.hide();

      this.tac3=createElement('h2')
      this.tac4=createElement('h2')
      this.tac3.hide();
      this.tac4.hide();

      this.re1=createElement('h2')
      this.re2=createElement('h2')
      this.re1.hide();
      this.re2.hide();
    
    }

    show()
    {
        this.pre.show()
        this.faq.show();
        this.button.show();
        ch.visible=true;
    }

    hide()
    {
        ch.visible=false
        this.button.hide();
        this.faq.hide()
        this.pre.hide()
    }

    display()
    {

        this.button.position(displayWidth/2-100,displayHeight/2-200);
        this.button.style('width', '200px');
        this.button.style('height', '70px');
        this.button.style('background', 'lightpink');
        this.button.style('font-size', '25px');

        this.faq.position(displayWidth/2-100,displayHeight/2-70);
        this.faq.style('width', '200px');
        this.faq.style('height', '70px');
        this.faq.style('background', 'lightpink');
        this.faq.style('font-size', '25px');

        this.pre.position(displayWidth/2-100,displayHeight/2+50);
        this.pre.style('width', '200px');
        this.pre.style('height', '150px');
        this.pre.style('background', 'lightpink');
        this.pre.style('font-size', '25px');
        
        this.home.position(displayWidth-270,displayHeight-250);
        this.home.style('width', '130px');
        this.home.style('height', '70px');
        this.home.style('background', 'lightpink');
        this.home.style('font-size', '25px');

        this.cold.position(displayWidth/2-100,displayHeight-500);
        this.cold.style('width', '150px');
        this.cold.style('height', '70px');
        this.cold.style('background', 'lightpink');
        this.cold.style('font-size', '25px');

        this.ache1.position(displayWidth/2-100,displayHeight/2-250);
        this.ache1.style('width', '150px');
        this.ache1.style('height', '70px');
        this.ache1.style('background', 'lightpink');
        this.ache1.style('font-size', '25px');

        this.ache2.position(displayWidth/2-100,displayHeight/2-150);
        this.ache2.style('width', '150px');
        this.ache2.style('height', '70px');
        this.ache2.style('background', 'lightpink');
        this.ache2.style('font-size', '25px');

        this.red.position(displayWidth/2-100,displayHeight/2-50);
        this.red.style('width', '150px');
        this.red.style('height', '70px');
        this.red.style('background', 'lightpink');
        this.red.style('font-size', '25px');

        this.cold2.html("If you are not feeling difficulty in breathing and feeling that it is a common cold get isolated and go to a doctor.");
        this.cold2.position(displayWidth/2-500,displayHeight/2-100);
        this.cold2.style('font-size', '25px');

        this.cold3.html("If you are feeling difficulty in breathing and experiencing other symptoms of COVID-19. Please seek immidiate medical care . stay safe");
        this.cold3.position(displayWidth/2-700,displayHeight/2+200);
        this.cold3.style('font-size', '25px');

        this.tac1.html("If you are having very much tooth ache please go to a dentist and do as prescribed by the dentist.");
        this.tac1.position(displayWidth/2-700,displayHeight/2-200);
        this.tac1.style('font-size', '25px');

        this.tac2.html("If you are having normal tooth ache do the following : a)Rinse your mouth well   b)Salt water rinse  c)dab a small amount of clove oil onto a cotton ball and apply it to the affected area.");
        this.tac2.position(displayWidth/2-700,displayHeight/2+50);
        this.tac2.style('font-size', '25px');

        this.tac3.html("If you are having normal stomach pain , do as the following: 1)Drinking water  2)Avoiding lying down  3)BRAT diet,BRAT stands for Bananas, Rice, Applesauce, and Toast.");
        this.tac3.position(displayWidth/2-700,displayHeight/2-200);
        this.tac3.style('font-size', '25px');

        this.tac4.html("If you are feeling dehydrated drink ORS solution or if having very much stomach ache please so to a doctor.");
        this.tac4.position(displayWidth/2-700,displayHeight/2+50);
        this.tac4.style('font-size', '25px');

        this.re1.html("If your eyes are red please don't watch TV or other gadgets, sleep for some time.Regularly place a cool compress over the eyes, made by soaking clean cotton wool or cloth in warm or cold water and then squeezing it out.");
        this.re1.position(displayWidth/2-700,displayHeight/2-200);
        this.re1.style('font-size', '25px');

        this.re2.html("If you are still having red eyes and having blur vision please go to a doctor. ");
        this.re2.position(displayWidth/2-700,displayHeight/2+50);
        this.re2.style('font-size', '25px');

        this.faq.mousePressed(()=>{
            option1.hide();
            fq1.visible=true;
            fq2.visible=true
            fq3.visible=true
            fq4.visible=true
        })

        this.home.mousePressed(()=>{
            fq1.visible=false;
            fq2.visible=false
            fq3.visible=false
            fq4.visible=false
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.show()
            this.cold2.hide();
            this.cold3.hide();
            this.tac1.hide();
            this.tac2.hide();
            this.tac3.hide();
            this.tac4.hide();
            this.re1.hide();
            this.re2.hide();
            pre.visible=false
        })

        this.button.mousePressed(()=>{
            this.cold.show();
            this.ache1.show();
            this.ache2.show();;
            this.red.show();
            option1.hide();
            ch.visible=true;
        })
        this.cold.mousePressed(()=>{
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.hide();
            ch.visible=false;
            this.cold2.show();
            this.cold3.show();
        })
        this.ache1.mousePressed(()=>{
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.hide();
            ch.visible=false;
            this.tac1.show()
            this.tac2.show();

        })
        this.ache2.mousePressed(()=>{
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.hide();
            ch.visible=false;
            this.tac1.hide();
            this.tac2.hide();

            this.tac3.show()
            this.tac4.show();

        })
        this.red.mousePressed(()=>{
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.hide();
            ch.visible=false;
            this.tac1.hide();
            this.tac2.hide();
            this.tac3.hide()
            this.tac4.hide();
            
            this.re1.show();
            this.re2.show();
        })
        this.pre.mousePressed(()=>{
            this.cold.hide();
            this.ache1.hide();
            this.ache2.hide();
            this.red.hide();
            option1.hide();
            ch.visible=false;
            this.tac1.hide();
            this.tac2.hide();
            this.tac3.hide()
            this.tac4.hide();
            this.re1.hide();
            this.re2.hide();

            pre.visible=true
        })


    }
}