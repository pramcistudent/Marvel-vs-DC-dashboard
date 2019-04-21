const tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark'
    }
});

tour.addStep('example-step', {
    text: 'The webpage below shows data from Marvel comics and DC comics. All of the charts are interactive click one to see what happens.',
    attachTo: '.helper1 top',
    buttons: [
        {
        text: 'Next',
        action: tour.next
        }
    ]
});

tour.addStep('example-step', {
    text: 'Do you have a favorite hero? If so try selecting the hero here.',
    attachTo: '.helper2 top',
    buttons: [
        {
        text: 'Next',
        action: tour.next
        }
    ]
});

tour.addStep('example-step', {
    text: 'You can reset all of the charts by clicking this button.',
    attachTo: '.helper3 left',
    buttons: [
        {
        text: 'Next',
        action: tour.next
        }
    ]
});

tour.start();