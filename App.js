"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  //making an app component with state
  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: exampleMovieData, //the state of the list of ALL movies
      selectedMovies: exampleMovieData //default state is to display all
    };
    return _this;
  }

  _createClass(App, [{
    key: "searchMovies",
    value: function searchMovies(event) {
      console.log(event.target.value);
      this.setState({ selectedMovies: this.state.movies.filter(function (movie) {
          return movie.title.includes(event.target.value);
        }) });
    }
  }, {
    key: "render",
    value: function render() {
      //will make the APP component contain MovieList and Search components
      return React.createElement(
        "div",
        { className: "col-md-5" },
        React.createElement(MovieList, { movies: exampleMovieData, selectedMovies: this.state.selectedMovies }),
        React.createElement(Search, { searchMovies: this.searchMovies.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;

//this is gonna be your main app component with state and the main components of the other
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImV4YW1wbGVNb3ZpZURhdGEiLCJzZWxlY3RlZE1vdmllcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJzZWFyY2hNb3ZpZXMiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQThCO0FBQ2xDLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVNDLGdCQURFLEVBQ2U7QUFDMUJDLHNCQUFnQkQsZ0JBRkwsQ0FFc0I7QUFGdEIsS0FBYjtBQUZpQjtBQU1sQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ25CQyxjQUFRQyxHQUFSLENBQVlGLE1BQU1HLE1BQU4sQ0FBYUMsS0FBekI7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBQ04sZ0JBQWdCLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlMsTUFBbEIsQ0FBeUI7QUFBQSxpQkFBU0MsTUFBTUMsS0FBTixDQUFZQyxRQUFaLENBQXFCVCxNQUFNRyxNQUFOLENBQWFDLEtBQWxDLENBQVQ7QUFBQSxTQUF6QixDQUFqQixFQUFkO0FBRUE7Ozs2QkFFUTtBQUFFO0FBQ1QsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDSyw0QkFBQyxTQUFELElBQVcsUUFBUU4sZ0JBQW5CLEVBQXFDLGdCQUFnQixLQUFLRixLQUFMLENBQVdHLGNBQWhFLEdBREw7QUFFSyw0QkFBQyxNQUFELElBQVEsY0FBYyxLQUFLVyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF0QjtBQUZMLE9BREY7QUFLQzs7OztFQXJCYUMsTUFBTUMsUzs7QUF3QnhCO0FBQ0E7OztBQUNBQyxPQUFPcEIsR0FBUCxHQUFhQSxHQUFiOztBQUVBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vbWFraW5nIGFuIGFwcCBjb21wb25lbnQgd2l0aCBzdGF0ZVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXMgOiBleGFtcGxlTW92aWVEYXRhLC8vdGhlIHN0YXRlIG9mIHRoZSBsaXN0IG9mIEFMTCBtb3ZpZXNcbiAgICAgIHNlbGVjdGVkTW92aWVzOiBleGFtcGxlTW92aWVEYXRhIC8vZGVmYXVsdCBzdGF0ZSBpcyB0byBkaXNwbGF5IGFsbFxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaE1vdmllcyhldmVudCkge1xuICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNb3ZpZXM6IHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpKX0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHsgLy93aWxsIG1ha2UgdGhlIEFQUCBjb21wb25lbnQgY29udGFpbiBNb3ZpZUxpc3QgYW5kIFNlYXJjaCBjb21wb25lbnRzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e2V4YW1wbGVNb3ZpZURhdGF9IHNlbGVjdGVkTW92aWVzPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW92aWVzfS8+XG4gICAgICAgICAgIDxTZWFyY2ggc2VhcmNoTW92aWVzPXt0aGlzLnNlYXJjaE1vdmllcy5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICl9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwO1xuXG4vL3RoaXMgaXMgZ29ubmEgYmUgeW91ciBtYWluIGFwcCBjb21wb25lbnQgd2l0aCBzdGF0ZSBhbmQgdGhlIG1haW4gY29tcG9uZW50cyBvZiB0aGUgb3RoZXJcbiJdfQ==