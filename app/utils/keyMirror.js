import fp from 'lodash/fp';

const keyMirror = keys => fp.zipObject(keys)(keys);

export default keyMirror;
