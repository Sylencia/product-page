# Product Page Test

## Usage
```
yarn
npm start

Open browser at localhost:3000
```

## Testing Observations
The following observations were noticed while testing the product during development:
- Due to flex-start on the ProductGrid, the items look odd on weird width dimensions as they won't be centered. However, if the items are centered instead, when there are an uneven amount of elements, it will also look strange.
- Due to the way the filter selections are made (by going through the JSON and adding the available elements), the order is not what is expected. That is, (XS, S, L, XL, M) is shown, rather than M being in the middle.
- If the name of a product is too long (three lines or longer), then you'll have it potentially overlap the Sale/Exclusive element.
- Borders between the elements are not consistent, as each product has a 0.5px border, but the inner borders will double that as it applies to both elements.
- While none of the test data contains an 'Exclusive' and 'Sale' item, it appears to show correctly if modified to do so.

## Notes
- To avoid using frameworks, flexboxes were used liberally along with a media query for the header to achieve a more responsive feel.
