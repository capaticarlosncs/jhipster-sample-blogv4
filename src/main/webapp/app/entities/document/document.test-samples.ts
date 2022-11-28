import { IDocument, NewDocument } from './document.model';

export const sampleWithRequiredData: IDocument = {
  id: 70614,
  title: 'Planner Borders',
  sizes: 75376,
};

export const sampleWithPartialData: IDocument = {
  id: 61321,
  title: 'Home Berkshire Future',
  sizes: 8569,
};

export const sampleWithFullData: IDocument = {
  id: 75263,
  title: 'next California',
  sizes: 19139,
  mimeType: 'Cambridgeshire',
};

export const sampleWithNewData: NewDocument = {
  title: 'Branding Mountains drive',
  sizes: 87831,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
