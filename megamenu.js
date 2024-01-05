// MOST RECENT UPDATE: FINAL NAV STATE
let navItems = [
  "#about-us-nav",
  "#platform-nav",
  "#solutions-nav",
  "#resources-nav",
];

navItems.forEach((navSelector) => {
  const menu = jQuery(navSelector);
  const triggers = menu.find(".menu-item").filter(function () {
    return !jQuery(this).parents(".jet-custom-nav__sub").length; // Filter out sub-menu items
  });
  const firstItem = jQuery(navSelector.replace("-nav", "-first"));
  const hovers = jQuery(navSelector.replace("-nav", "-content")).children();
  const target = menu.find(".menu-item")[0];

  // Remove the first item from the hovers array
  hovers.splice(0, 1);

  // Always hide hovers until we get a trigger
  hovers.hide();

  triggers.on("mouseover", function () {
    var myindex = triggers.index(this);
    hovers.hide();
    firstItem.hide();
    jQuery(hovers[myindex]).show();
  });
});

console.log(
  "find this code under the header editing gear icon (header settings), then on the left nav click into advanced > custom javascript"
);
