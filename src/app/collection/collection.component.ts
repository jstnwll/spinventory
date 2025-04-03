import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AlbumInterface } from '../album-interface';

@Component({
  selector: 'app-collection',
  imports: [NgFor],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {
  albumInterface: AlbumInterface[] = [
    {
      id: 1,
      artist: 'Radiohead',
      title: 'OK Computer',
      releaseDate: 1997,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png',
      wishlist: false,
      collection: true,
    },
    {
      id: 2,
      artist: 'Kendrick Lamar',
      title: 'To Pimp a Butterfly',
      releaseDate: 2015,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png',
      wishlist: true,
      collection: false,
    },
    {
      id: 3,
      artist: 'Fleetwood Mac',
      title: 'Rumours',
      releaseDate: 1977,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
      wishlist: false,
      collection: true,
    },
    {
      id: 4,
      artist: 'Tyler, the Creator',
      title: 'IGOR',
      releaseDate: 2019,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
      wishlist: false,
      collection: true,
    },
    {
      id: 5,
      artist: 'Daft Punk',
      title: 'Random Access Memories',
      releaseDate: 2013,
      coverImage:
        'https://groundzero.fr/wp-content/uploads/2023/02/daft-punk-random-access-memories-anniversary-edition-1677082645.jpeg',
      wishlist: true,
      collection: false,
    },
    {
      id: 6,
      artist: 'Beyoncé',
      title: 'Lemonade',
      releaseDate: 2016,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png',
      wishlist: false,
      collection: true,
    },
    {
      id: 7,
      artist: 'David Bowie',
      title: 'Blackstar',
      releaseDate: 2016,
      coverImage:
        'https://www.thetribune.ca/wp-content/uploads/2016/01/bowie-blackstar-paul-raffaele-vice.jpg',
      wishlist: true,
      collection: false,
    },
    {
      id: 8,
      artist: 'Lorde',
      title: 'Melodrama',
      releaseDate: 2017,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png',
      wishlist: false,
      collection: true,
    },
    {
      id: 9,
      artist: 'The Beatles',
      title: 'Abbey Road',
      releaseDate: 1969,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
      wishlist: false,
      collection: true,
    },
    {
      id: 10,
      artist: 'Frank Ocean',
      title: 'Blonde',
      releaseDate: 2016,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg',
      wishlist: true,
      collection: false,
    },
    {
      id: 11,
      artist: 'Billie Eilish',
      title: 'When We All Fall Asleep, Where Do We Go?',
      releaseDate: 2019,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png',
      wishlist: false,
      collection: true,
    },
    {
      id: 12,
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      releaseDate: 1973,
      coverImage:
        'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
      wishlist: true,
      collection: true,
    },
  ];
}
