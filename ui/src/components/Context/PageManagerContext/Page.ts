import VanilyUrl from './VanilyUrl'

export default interface Page {
  name: string;
  displayName: string;
  uuid: string;
  path: string;
  vanityUrls: Array<VanilyUrl>;
  childPages: any;
}
