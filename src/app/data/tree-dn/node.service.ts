import { TreeNode } from 'primeng/primeng';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {

    constructor(private http: Http) { }
    getFiles() {
        return this.http.get('dn_data/files.json')
            .toPromise()
            .then(res => <TreeNode[]>res.json().data);
    }
    getLazyFiles() {
        return this.http.get('dn_data/files-lazy.json')
            .toPromise()
            .then(res => <TreeNode[]>res.json().data);
    }
    getFilesystem() {
        return this.http.get('dn_data/filesystem.json')
            .toPromise()
            .then(res => <TreeNode[]>res.json().data);
    }

    getLazyFilesystem() {
        return this.http.get('dn_data/filesystem-lazy.json')
            .toPromise()
            .then(res => <TreeNode[]>res.json().data);
    }
}