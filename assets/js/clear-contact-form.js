// https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
(function () {
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
});
