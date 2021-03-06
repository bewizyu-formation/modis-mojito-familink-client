import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { TestBed, inject } from '@angular/core/testing';
import { ApiRequestService } from './apiRequests.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import Contact from '../models/Contact';
import Conversation from '../models/Conversation';
import Coordonnees from '../models/Coordonnees';
import Group from '../models/Group';
import Message from '../models/Message';
import User from '../models/User';


  describe('ApiRequestService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientModule],
        providers: [
          ApiRequestService,
        ]
      });
    });
  
    it('should be created', inject([ApiRequestService], (service: ApiRequestService) => {
      expect(service).toBeTruthy();
    }));

    // it('should fail the test', inject([ApiRequestService], (service: ApiRequestService) => {
    //   expect("a").toBe("b");
    // }));
  
    it('should parse instances of contacts', inject([ApiRequestService], (service: ApiRequestService) => {

      var tabContact:Array<Contact> = [];
      //expect("a").toBe("guillaumeBonnet");
       return service.getContacts(9).toPromise()
        .then((result) => {
          console.log('=====tableau de contacto', result, '=====tableau de contact');
          // tabContact = result 
          //   .map(elem => new Contact(
          //       elem.id
          //       , elem.group
          //       , elem.nom
          //       , elem.prenom
          //       , elem.profil
          //       , new Coordonne(
          //               elem.coordonnees.id
          //               ,elem.coordonnees.adresse
          //               , elem.coordonnees.codePostal
          //               , elem.coordonnees.ville
          //               , elem.coordonnees.phone
          //               , elem.coordonnees.email
          //                       )
          //       , elem.gravatar));
          // console.log('tabContact : ', tabContact);
          return expect("a").toBe("guillaumeBonnet")
        })
        // .subscribe((result:any) => {
        //   console.log('next');
        //   console.log('=====tableau de contact', result, '=====tableau de contact');
        //   expect(result[0]).toBe('Contact');
        //   expect("a").toBe("guillaumeBonnet");
        // }, () => {
        //   console.log('error');
        //   fail("Do not fail")
        // }, () => {
        //   console.log('complete');
        // });
    }));

    it('should post a contact in DB', inject([ApiRequestService], (service: ApiRequestService) => {
      
             return service.postContact(
                9
                , new Contact(
                    9
                    , null
                    , "Glover"
                    , "Donald"
                    , "god"
                    , new Coordonnees(4, "ici", 6900, "Lyon", "04 78 87 94 11", "toto@geronimo.com")
                    , "gravatar1"))
                .subscribe( 
                      (result) => console.log(result, "postResult")
                      , (error) => console.log(error, "error dans post")
                      , () => console.log('unsubscribe'));
          }));

    
  
  });

