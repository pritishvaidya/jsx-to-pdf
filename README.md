# jsx-to-pdf [![Maintainability](https://api.codeclimate.com/v1/badges/7423dd108f497de225d5/maintainability)](https://codeclimate.com/github/pritishvaidya/jsx-to-pdf/maintainability)
A Simple Utility to render React JSX to PDF

## Getting Started

- [Installation](#installation)
- [Basic Implementation](#basic-implementation)
- [Hook Implementation](#hook-implementation)
- [Output](#output)
- [Contribution](#contribution)
- [Questions](#questions)

### Installation

```bash
$ npm i jsx-to-pdf
```

### Basic Implementation

```jsx
import { JsxToPdf } from "jsx-to-pdf";

function App() {
  return (
    <JsxToPdf>
        {({ save, jsxRef, error, errorText }) => {
          return (
            <div className="App" ref={jsxRef}>
              <button style={{ height: 50, margin: 20, backgroundColor: '#61dafb' }} onClick={save}>Download PDF for this Page</button>
            </div>
          )
        }}
    </JsxToPdf>
  )
}
```

### Hook Implementation

```jsx
import { useJsxToPdf } from "jsx-to-pdf";

function App() {
  const { jsxRef, convertToPdf } = useJsxToPdf()
  return (
    <div className="App" ref={jsxRef}>
      <button style={{ height: 50, margin: 20, backgroundColor: '#61dafb' }} onClick={save}>Download PDF for this Page</button>
    </div>
  )
}
```

### Input
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| name | String | `jsxToPdf` | Name of the PDF to be saved |
| scale | Number | 1 | Scale of the HTMLNodeElement element  |
| x | Number | 0 | Offset x of the PDF |
| y | Number | 0 | Offset y of the PDF |
| width | Number | `jsPDF` document width | Width of the `HTMLNodeElement` to be set in PDF |
| height | Number | `jsPDF` document height | Height of the `HTMLNodeElement` to be set in PDF |
| `{...rest}` | Object | `{}` | [JSPDF](http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html) options  |


### Output

#### Render Props
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| save | Function | `() => {}` | Trigger PDF Submit |
| jsxRef | `ref` | undefined | Reference to the `HTMLNodeElement`  |
| loading | Boolean | false | Loader for PDF save |
| error | Boolean | false | Error |
| errorText | String | `() => {}` | Error Text |

#### Hooks
| Name  | Type  | Default | Description |
| :------------ |---------------:| :---------------| :-----|
| convertToPDF | Function | `() => {}` | Trigger PDF Submit |
| jsxRef | `ref` | undefined | Reference to the `HTMLNodeElement`  |
| loading | Boolean | false | Loader for PDF save |
| error | Boolean | false | Error |
| errorText | String | `() => {}` | Error Text |


## Contribution

- [@pritishvaidya](mailto:contact@pritishvaidya.dev) The main author.

## Questions

Feel free to [contact me](mailto:contact@pritishvaidya.dev) or [create an issue](https://github.com/pritishvaidya/jsx-to-pdf/issues/new)