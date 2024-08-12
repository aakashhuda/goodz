import { ref, watch, computed } from "vue";

export default function useLayout() {
  const sidebarExpanded = ref(true);
  const windowWidth = ref(document.body.clientWidth);
  const style = ref({ left: "200px", width: "0px" });

  function windowSizeChanged() {
    windowWidth.value = document.body.clientWidth;
  }

  function changeCollapseState(isExpanded) {
    sidebarExpanded.value = isExpanded;
  }

  function getContentProperties(newWindowWidth, newSidebarState) {
    let contentWidth;
    let contentPosition;

    if (newSidebarState) {
      contentWidth = newWindowWidth - 200 + "px";
      contentPosition = "200px";
    } else {
      contentWidth = newWindowWidth - 63 + "px";
      contentPosition = "63px";
    }
    return { contentWidth, contentPosition };
  }

  function setLayoutProperties(newWidth, newSidebarState) {
    const { contentWidth, contentPosition } = getContentProperties(
      newWidth,
      newSidebarState
    );

    style.value = {
      left: contentPosition,
      width: contentWidth,
    };
  }

  return {
    sidebarExpanded,
    windowWidth,
    style,
    windowSizeChanged,
    changeCollapseState,
    setLayoutProperties,
  };
}
