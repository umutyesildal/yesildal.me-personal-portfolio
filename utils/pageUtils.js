export const downloadApp = (after) => {
  if(document.querySelector('.qr-container')?.classList.contains('shown')){
    // we have the qr container and it's shown, scroll that into view
    document.querySelector('.qr-container').scrollIntoView({
      block: 'center'
    });
    setTimeout(() => {
      document.querySelector('.qr-container').classList.add('attention-shown');
      setTimeout(() => {
        document.querySelector('.qr-container').classList.remove('attention-shown');
      }, 1000);
    }, after ?? 0);
   
  }else{
    document.location.href = 'https://metave.st/download';
  }
};