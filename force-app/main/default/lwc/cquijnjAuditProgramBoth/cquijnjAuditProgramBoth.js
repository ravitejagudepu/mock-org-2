// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_COMPLIANCEQUEST__SQX_AUDIT_PROGRAM__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c';


// Field_<field api name without __c if present>

import FIELD_NAME from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.Name';

import FIELD_COMPLIANCEQUEST__TITLE__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Title__c';

import FIELD_COMPLIANCEQUEST__OBJECTIVE__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Objective__c';

import FIELD_COMPLIANCEQUEST__CALENDAR__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Calendar__c';

import FIELD_COMPLIANCEQUEST__SQX_LOCATION__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__SQX_Location__c';

import FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Audit_Program_Year__c';

import FIELD_COMPLIANCEQUEST__ORG_DIVISION__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Org_Division__c';

import FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Org_Business_Unit__c';

import FIELD_COMPLIANCEQUEST__ORG_REGION__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__Org_Region__c';

import FIELD_CQ_SITE__C from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.CQ_Site__c';

import FIELD_CREATEDBYID from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.CreatedById';

import FIELD_LASTMODIFIEDBYID from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.LastModifiedById';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.compliancequest__SQX_Location__r.Name';
    


    


    


    


    


    
import FIELD_CQ_SITE__NAME from '@salesforce/schema/compliancequest__SQX_Audit_Program__c.CQ_Site__r.Name';
    


    


    



// import section custom label
    
        
import CQJNJ_INFORMATION from '@salesforce/label/c.CQJNJ_INFORMATION';
        
    
        
import CQJNJ_CALENDAR from '@salesforce/label/c.CQJNJ_CALENDAR';
        
    
        
import CQJNJ_ORG_INFORMATION from '@salesforce/label/c.CQJNJ_ORG_INFORMATION';
        
    
        
import CQJNJ_SYSTEM_INFORMATION from '@salesforce/label/c.CQJNJ_SYSTEM_INFORMATION';
        
    
        
import CQJNJ_CUSTOM_LINKS from '@salesforce/label/c.CQJNJ_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [
 

    
    FIELD_NAME,
    
    FIELD_COMPLIANCEQUEST__TITLE__C,
    
    FIELD_COMPLIANCEQUEST__OBJECTIVE__C,
    
    FIELD_COMPLIANCEQUEST__CALENDAR__C,
    
    FIELD_COMPLIANCEQUEST__SQX_LOCATION__C,
    
    FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C,
    
    FIELD_COMPLIANCEQUEST__ORG_DIVISION__C,
    
    FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C,
    
    FIELD_COMPLIANCEQUEST__ORG_REGION__C,
    
    FIELD_CQ_SITE__C,
    
    FIELD_CREATEDBYID,
    
    FIELD_LASTMODIFIEDBYID,
    
    
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME,
        
    
        
    
        
    
        
    
        
    
        
    FIELD_CQ_SITE__NAME,
        
    
        
    
        
    
];

const lookupDisplayFields = {
    
    
        

        

        

        

        
    "compliancequest__SQX_Location__c": FIELD_COMPLIANCEQUEST__SQX_LOCATION__NAME,
    

        

        

        

        

        
    "CQ_Site__c": FIELD_CQ_SITE__NAME,
    

        

        

};

const LOOKUP_FILTERS = {"compliancequest__SQX_Approval_Matrix__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","usv_param":"DeveloperName","operator":"eq","value":"Audit_Program"}],"logic":"and"}};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {};
const FORMULA_FIELDS = {};

export default class cquijnjAuditProgramBoth  extends cqRecordForm {
    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_COMPLIANCEQUEST__SQX_AUDIT_PROGRAM__C,fields,lookupDisplayFields);
        
        
        this.sectionHider = {"expando_unique_id_1":true,"expando_unique_id_2":true,"expando_unique_id_3":true,"expando_unique_id_4":true,"expando_unique_id_5":true}

        // Extend rules
        this.lookupFilters = LOOKUP_FILTERS;
        this.dynamicSources = DYNAMIC_SOURCES;
        this.inputFormRules = FORM_RULES;
        this.systemFormRules = FORMULA_FIELDS;
        this.picklistValueSource = {
            
        };
        this.uiType = {};
        this.parentRecordApi="";
        
    }


    @api
    get recordId() {
        return this._recordId;
    }
    set recordId(value) {
        this._recordId = value;
        this.parentId = value;
    }

    // getters for field value, display value and field metadata
    
    get v_NAME() {
        return this.getValueFor(FIELD_NAME.fieldApiName);
    }
    get f_NAME() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_NAME.fieldApiName] : {};
        return val;
    }

    get d_NAME() {
        return lookupDisplayFields[FIELD_NAME.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_NAME.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__TITLE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__TITLE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__TITLE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__OBJECTIVE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__OBJECTIVE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__OBJECTIVE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__OBJECTIVE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__OBJECTIVE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__OBJECTIVE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__OBJECTIVE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CALENDAR__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CALENDAR__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CALENDAR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CALENDAR__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CALENDAR__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CALENDAR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CALENDAR__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_LOCATION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_LOCATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_LOCATION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOCATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__AUDIT_PROGRAM_YEAR__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_DIVISION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_REGION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_REGION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_REGION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_SITE__C() {
        return this.getValueFor(FIELD_CQ_SITE__C.fieldApiName);
    }
    get f_CQ_SITE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_SITE__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_SITE__C() {
        return lookupDisplayFields[FIELD_CQ_SITE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_SITE__C.fieldApiName].fieldApiName);
    }

    
    get v_CREATEDBYID() {
        return this.getValueFor(FIELD_CREATEDBYID.fieldApiName);
    }
    get f_CREATEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CREATEDBYID.fieldApiName] : {};
        return val;
    }

    get d_CREATEDBYID() {
        return lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CREATEDBYID.fieldApiName].fieldApiName);
    }

    
    get v_LASTMODIFIEDBYID() {
        return this.getValueFor(FIELD_LASTMODIFIEDBYID.fieldApiName);
    }
    get f_LASTMODIFIEDBYID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_LASTMODIFIEDBYID.fieldApiName] : {};
        return val;
    }

    get d_LASTMODIFIEDBYID() {
        return lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_LASTMODIFIEDBYID.fieldApiName].fieldApiName);
    }

    


    
        
    get CQJNJ_INFORMATION() {
        return CQJNJ_INFORMATION;
    }
        
    
        
    get CQJNJ_CALENDAR() {
        return CQJNJ_CALENDAR;
    }
        
    
        
    get CQJNJ_ORG_INFORMATION() {
        return CQJNJ_ORG_INFORMATION;
    }
        
    
        
    get CQJNJ_SYSTEM_INFORMATION() {
        return CQJNJ_SYSTEM_INFORMATION;
    }
        
    
        
    get CQJNJ_CUSTOM_LINKS() {
        return CQJNJ_CUSTOM_LINKS;
    }
        
    
}