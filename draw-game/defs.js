/*
  Shared SVG definitions for every Pen Panic screen. Include once, as the first child of <body>:
    <script src="../defs.js"></script>
  Injects the pen-wobble filters used by tokens.css (#wob, #wob2, #wob3) and the shared
  icon symbols. Use an icon with:  <svg class="ic" aria-hidden="true"><use href="#i-undo"/></svg>
  Icons: i-s i-m i-l (brush sizes), i-pen, i-eraser, i-fill, i-undo, i-redo, i-clear, i-tick,
  i-menu, i-close, i-back, i-next, i-link, i-copy, i-share, i-people, i-crown, i-clock,
  i-wifi, i-play, i-chat, i-zoom, i-dice.
  Inline in each page (not an external file) because Safari ignores filters referenced
  from another document, and Chrome blocks cross-file <use> when opened from disk.
*/
document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<filter id="wob" x="-6%" y="-12%" width="112%" height="124%"><feTurbulence type="fractalNoise" baseFrequency=".028" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G"/></filter>
    <filter id="wob2" x="-8%" y="-14%" width="116%" height="128%"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="11" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter>
    <filter id="wob3" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".09" numOctaves="1" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.3" xChannelSelector="R" yChannelSelector="G"/></filter>

    <symbol id="i-s" viewBox="0 0 24 24"><path fill="#1C2E7A" stroke="none" d="M12 9.4c1.6-.1 2.8 1.1 2.7 2.7-.1 1.5-1.3 2.6-2.8 2.5-1.5-.1-2.6-1.3-2.5-2.8.1-1.3 1.2-2.3 2.6-2.4z"/></symbol>
    <symbol id="i-m" viewBox="0 0 24 24"><path fill="#1C2E7A" stroke="none" d="M12.2 7c2.8-.1 5 2.2 4.8 5-.2 2.7-2.4 4.7-5.1 4.6-2.7-.1-4.8-2.4-4.6-5.1C7.4 9 9.500 7.100 12.200 7z"/></symbol>
    <symbol id="i-l" viewBox="0 0 24 24"><path fill="#1C2E7A" stroke="none" d="M12.300 4c4.500-.2 8.100 3.600 7.700 8.100-.4 4.300-4 7.500-8.300 7.300C7.400 19.200 4 15.500 4.300 11.200 4.600 7.300 8 4.200 12.300 4z"/></symbol>
    <symbol id="i-eraser" viewBox="0 0 24 24"><path d="M4.300 15.400 12.600 5.200l7.200 5.400-8.100 10.300z"/><path d="M8.700 10.200l7 5.400"/><path d="M2.800 21.600c2.800-.5 5.400.2 8.200-.2"/></symbol>
    <symbol id="i-fill" viewBox="0 0 24 24"><path d="M4.600 12.200 11.800 4.600l7.800 7.900-6.700 6.900c-.9.9-2.200.9-3.100 0l-5.200-5.100c-.6-.600-.600-1.500 0-2.100z"/><path d="M8.400 4.200l4.300 4.400"/><path d="M5.200 12.800c4.300-.6 8.600.3 13 0"/><path fill="#FF9A3C" d="M20.400 15.400c1.300 1.900 2 3.100 2 4a1.900 1.900 0 0 1-3.900 0c0-.9.6-2.100 1.900-4z"/></symbol>
    <symbol id="i-undo" viewBox="0 0 24 24"><path d="M9.200 5.800 4.300 10.600l5.100 4.600"/><path d="M5 10.500c3.300-.3 6.600-.3 9.700 0 2.900.3 5 2.300 5 5s-2.200 4.700-5 4.800l-3.400.1"/></symbol>
    <symbol id="i-redo" viewBox="0 0 24 24"><path d="M14.800 5.800l4.900 4.800-5.100 4.600"/><path d="M19 10.500c-3.300-.3-6.600-.3-9.700 0-2.900.3-5 2.300-5 5s2.200 4.700 5 4.800l3.400.1"/></symbol>
    <symbol id="i-clear" viewBox="0 0 24 24"><path d="M4 7.200c5.300-.5 10.700-.5 16 0"/><path d="M9.400 6.800 9.600 4.200h4.900l.2 2.600"/><path d="M6.300 7.400 7.500 20.600h9.200L17.800 7.400"/><path d="M10.200 10.800l.2 6.400M13.900 10.800l-.2 6.400"/></symbol>
    <symbol id="i-pen" viewBox="0 0 24 24"><path d="M3.800 20.300 5.200 15.200 16.400 3.900l3.700 3.600L8.900 18.900z"/><path d="M13.800 6.600l3.600 3.600"/></symbol>
    <symbol id="i-tick" viewBox="0 0 24 24"><path d="M4.200 13.200l5 5.200L20 5.800"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6.6c5.400-.4 10.700-.3 16 .1"/><path d="M4.200 12.100c5.300-.3 10.500-.2 15.700 0"/><path d="M4 17.500c5.300.3 10.700.2 16-.2"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M5.600 5.400c4.400 4.200 8.600 8.700 12.800 13.200"/><path d="M18.300 5.700C14 9.900 9.800 14.300 5.700 18.600"/></symbol>
<symbol id="i-back" viewBox="0 0 24 24"><path d="M10.200 5.600 4.400 12.100l5.900 6.200"/><path d="M4.800 12c5-.3 10-.2 15 .1"/></symbol>
<symbol id="i-next" viewBox="0 0 24 24"><path d="M13.800 5.600l5.800 6.500-5.900 6.200"/><path d="M19.200 12c-5-.3-10-.2-15 .1"/></symbol>
<symbol id="i-link" viewBox="0 0 24 24"><path d="M10.300 13.700c1.500 1.600 3.700 1.700 5.200.2l3.200-3.200c1.500-1.500 1.400-3.800-.1-5.200-1.500-1.500-3.700-1.400-5.100 0l-1.400 1.400"/><path d="M13.700 10.300c-1.500-1.600-3.700-1.700-5.200-.2l-3.200 3.200c-1.500 1.500-1.400 3.800.1 5.200 1.500 1.500 3.700 1.400 5.100 0l1.400-1.400"/></symbol>
<symbol id="i-copy" viewBox="0 0 24 24"><path d="M8.700 8.400c3.900-.2 7.800-.2 11.600.1.300 3.900.3 7.800 0 11.600-3.900.3-7.800.2-11.600 0-.2-3.900-.3-7.800 0-11.700z"/><path d="M15.400 5.300c0-.6-.1-1.200-.1-1.700-3.900-.2-7.800-.2-11.600.1-.3 3.900-.2 7.800 0 11.600.6 0 1.100.1 1.700.1"/></symbol>
<symbol id="i-share" viewBox="0 0 24 24"><path d="M12.100 15.200c-.2-3.900-.2-7.800 0-11.600"/><path d="M8.100 7.300 12 3.400l4 3.900"/><path d="M8.300 10.400H5.200c-.3 3.300-.3 6.600 0 9.900 4.600.3 9.200.3 13.700 0 .3-3.300.3-6.600 0-9.900h-3.100"/></symbol>
<symbol id="i-people" viewBox="0 0 24 24"><path d="M9.100 4.300c1.900 0 3.300 1.500 3.200 3.400-.1 1.800-1.500 3.100-3.300 3.100-1.800-.1-3.200-1.500-3.100-3.300 0-1.800 1.400-3.200 3.200-3.200z"/><path d="M2.800 19.700c.2-3.700 2.800-6.200 6.200-6.200 3.500 0 6.100 2.500 6.300 6.200"/><path d="M15.600 4.800c1.600.2 2.800 1.500 2.700 3.200-.1 1.400-1.100 2.500-2.400 2.800"/><path d="M17.400 13.800c2.200.7 3.700 2.900 3.800 5.800"/></symbol>
<symbol id="i-crown" viewBox="0 0 24 24"><path d="M4.200 17.600 3.300 7.400l5 4.300 3.800-6.500 3.700 6.500 5-4.300-.9 10.200c-5.300.4-10.400.4-15.700 0z"/><path d="M4.800 20.500c4.800.3 9.600.3 14.400 0"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><path d="M12.200 3.700c4.700-.1 8.300 3.700 8.100 8.400-.2 4.500-3.900 8-8.400 7.900-4.600-.1-8.200-3.900-8-8.500.2-4.400 3.800-7.800 8.300-7.800z"/><path d="M12 7.300c.1 1.700.1 3.400 0 5.100l3.200 2.100"/></symbol>
<symbol id="i-wifi" viewBox="0 0 24 24"><path d="M2.800 9.300c5.500-4.700 12.900-4.700 18.400 0"/><path d="M5.900 12.800c3.700-3 8.500-3 12.200 0"/><path d="M9 16.200c1.900-1.400 4.100-1.400 6 0"/><path class="f" d="M12 18.600c.8 0 1.400.6 1.400 1.300 0 .8-.6 1.400-1.400 1.400-.8 0-1.400-.6-1.400-1.400 0-.7.600-1.300 1.400-1.300z"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><path d="M7.200 4.600c4.300 2.300 8.400 4.700 12.300 7.400-3.900 2.700-8 5.100-12.300 7.400-.3-4.900-.3-9.900 0-14.800z"/></symbol>
<symbol id="i-chat" viewBox="0 0 24 24"><path d="M4.300 5.200c5.200-.4 10.300-.4 15.500 0 .3 3.300.3 6.600 0 9.900-3.400.3-6.800.3-10.200.2L5.400 19.400l.3-4.100H4.300c-.3-3.400-.3-6.700 0-10.100z"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24"><path d="M10.200 3.800c3.600-.1 6.500 2.900 6.300 6.500-.1 3.500-3 6.200-6.500 6.100-3.500-.1-6.300-3-6.200-6.500.1-3.400 3-6.100 6.400-6.100z"/><path d="M14.800 14.900c1.800 1.800 3.600 3.600 5.300 5.500"/><path d="M7.400 10.200c1.900-.1 3.800-.1 5.700 0M10.200 7.300c.1 1.900.1 3.800 0 5.700"/></symbol>
<symbol id="i-dice" viewBox="0 0 24 24"><path d="M4.400 4.300c5.100-.3 10.100-.3 15.200 0 .3 5.100.3 10.200 0 15.300-5.100.3-10.100.3-15.200 0-.3-5.100-.3-10.200 0-15.300z"/><path class="f" d="M8.300 7c.7 0 1.300.6 1.300 1.300S9 9.600 8.300 9.600 7 9 7 8.300 7.600 7 8.300 7zM15.700 14.400c.7 0 1.300.6 1.300 1.300s-.6 1.300-1.300 1.300-1.300-.6-1.300-1.300.6-1.300 1.300-1.300zM12 10.700c.7 0 1.300.6 1.300 1.300s-.6 1.300-1.300 1.300-1.300-.6-1.300-1.300.6-1.300 1.300-1.300z"/></symbol>
</defs></svg>`);
