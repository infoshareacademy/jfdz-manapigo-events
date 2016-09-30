/**
 * Created by Marek on 25.08.2016.
 */

(function() {

    // library to create API for "cookie" management
  var monster={set:function(e,t,n,r)
       {var i=new Date,s="",o=typeof t,u="";r=r||"/",n&&(i.setTime(i.getTime()+n*24*60*60*1e3),s="; expires="+i.toGMTString());if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length),i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}return r=="undefined"?undefined:unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

    // when below function is un-commented, the cookie alert will show only once
    // now it shows every time when the page is started

   /* if (monster.get('cookieinfo') === 'true') {
        return false;
    }*/ 

    var container = document.createElement('div'),
        link = document.createElement('a');

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>KNOCK, KNOCK! We use Cookies in here...</h6><p>To make this site work properly, we sometimes place small data files called cookies on your device. Most big websites do this too.<p>If you are OK with that, you can close this box by clicking on &bdquo;x&rdquo; <p>If you do not approve, you can change the settings in your browser.</p>';
    
    link.setAttribute('href', '#');     //creating the "X" (closing) button
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';
    
    function clickHandler(e) {      //function to switch-off the "X" (closing) button

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        
        container.setAttribute('style', 'opacity: 1');
        
        var interval = window.setInterval(function() {
            container.style.opacity -= 0.01;
            
            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieinfo', 'true', 1);
            }
        }, 4);
    }
    
    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }
    
    container.appendChild(link);
    document.body.appendChild(container);
    return true;
})();