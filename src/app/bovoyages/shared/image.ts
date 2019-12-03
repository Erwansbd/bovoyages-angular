export class Image {
  image: string;
  fkDestination: number;

  constructor(image: string, fkDestination: number) {
    this.image = image;
    this.fkDestination = fkDestination;
  }
}
