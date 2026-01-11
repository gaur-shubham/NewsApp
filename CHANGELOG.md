## v1.1-pre-refactor
- Stable NewsApp using NewsAPI
- React-class-based code
- Category-based news (sports, science, technology, business, etc.)
- News fetched in batches of 18 articles(server-side) per API request using page and pageSize
- News cards include source, author, and published date
- Infinite scroll implemented for loading more articles on scroll
- Top loading progress bar for API request feedback


## Planned next
-Migrate entire codebase from class-based components to function-based components
-Replace React lifecycle methods with React Hooks:
    -componentDidMount → useEffect
    -componentDidUpdate → useEffect with dependencies
    -componentWillUnmount → cleanup functions
-Transition state management from this.state / this.setState to useState
-Introduce custom hooks for reusable logic:
    -News data fetching
    -Infinite scroll handling
    -Pagination logic
-Remove class-specific boilerplate:
    -Constructors
    -this bindings
