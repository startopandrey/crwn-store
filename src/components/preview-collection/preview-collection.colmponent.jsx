import React from 'react';
import CollectionItem from './collection-iems/collection-iems.component';
import './preview-collection.styles.scss';
const CollectionPreview = ({ title, items }) => (
  <div>
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps}></CollectionItem>
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
