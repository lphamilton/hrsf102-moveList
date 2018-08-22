"use strict";

var Search = function Search(_ref) {
  var searchMovies = _ref.searchMovies;
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { className: "form-control", onChange: searchMovies }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down" },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};

//searchMovies is a function

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwic2VhcmNoTW92aWVzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUVDLFlBQUYsUUFBRUEsWUFBRjtBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFLG1DQUFPLFdBQVUsY0FBakIsRUFBZ0MsVUFBVUEsWUFBMUMsR0FERjtBQUVJO0FBQUE7QUFBQSxRQUFRLFdBQVUsb0JBQWxCO0FBQ0Esb0NBQU0sV0FBVSw0QkFBaEI7QUFEQTtBQUZKLEdBRFc7QUFBQSxDQUFiOztBQVNDOztBQUVEO0FBQ0E7QUFDQUMsT0FBT0YsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9ICh7c2VhcmNoTW92aWVzfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3NlYXJjaE1vdmllc30vPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbiAvL3NlYXJjaE1vdmllcyBpcyBhIGZ1bmN0aW9uXG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19