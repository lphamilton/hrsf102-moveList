"use strict";

var MovieListEntry = function MovieListEntry(_ref) {
  var movie = _ref.movie,
      title = _ref.title;
  return React.createElement(
    "div",
    null,
    React.createElement("img", { className: "media-object", src: "https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg", alt: "" }),
    React.createElement(
      "div",
      null,
      movie.title
    )
  );
};

//MovieListEntry need to receive props
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIm1vdmllIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQ25CO0FBQUE7QUFBQTtBQUNJLGlDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFJLGdEQUFsQyxFQUFtRixLQUFJLEVBQXZGLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFBTUQsWUFBTUM7QUFBWjtBQUZKLEdBRG1CO0FBQUEsQ0FBckI7O0FBT0E7QUFDQTtBQUNBO0FBQ0FGLGVBQWVHLFNBQWYsR0FBMkI7QUFDekJGLFNBQU9HLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT1IsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0RW50cnkgPSAoe21vdmllLCB0aXRsZX0pID0+IChcbiAgPGRpdj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8xdzhaMFVPWFZhWS9kZWZhdWx0LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2Pnttb3ZpZS50aXRsZX08L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vL01vdmllTGlzdEVudHJ5IG5lZWQgdG8gcmVjZWl2ZSBwcm9wc1xuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuTW92aWVMaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93Lk1vdmllTGlzdEVudHJ5ID0gTW92aWVMaXN0RW50cnk7XG4iXX0=