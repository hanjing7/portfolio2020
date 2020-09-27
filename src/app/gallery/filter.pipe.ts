import { Pipe, PipeTransform } from '@angular/core';
import {Gallery} from '../gallery';

@Pipe({
  name: 'galleryTagFilter'
})
export class FilterPipe implements PipeTransform {
  transform(galleries: Gallery[], tag: string): Gallery[] {
    if(tag === 'all') { return galleries; }
    return galleries.filter((gallery: Gallery) => gallery.tag === tag);
  }
}
