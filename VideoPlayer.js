"use strict";

var VideoPlayer = function VideoPlayer() {
  return React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", allowFullScreen: true })
    ),
    React.createElement(
      "div",
      { className: "video-player-details" },
      React.createElement(
        "h3",
        null,
        "Video Title"
      ),
      React.createElement(
        "div",
        null,
        "Video Description"
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoPlayer.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlDQUFmO0FBQ0Usc0NBQVEsV0FBVSx1QkFBbEIsRUFBMEMsS0FBSSxzREFBOUMsRUFBcUcscUJBQXJHO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFKRixHQURnQjtBQUFBLENBQWxCOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBQyxPQUFPRCxXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJWaWRlb1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb1BsYXllciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9kUXc0dzlXZ1hjUT9hdXRvcGxheT0xXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz5WaWRlbyBUaXRsZTwvaDM+XG4gICAgICA8ZGl2PlZpZGVvIERlc2NyaXB0aW9uPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuLy8gVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuLy8gICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4vLyB9O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvUGxheWVyID0gVmlkZW9QbGF5ZXI7XG4iXX0=