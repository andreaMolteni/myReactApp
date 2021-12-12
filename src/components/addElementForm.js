import React from 'react';

export default function AddElementForm ({manageClick, Ele, txtButton, txtLabel}){
    return  (<form>
        <div className="row d-flex justify-content-center  text-center">
          <div className="col-md-6">
            <div className="form-groupd d-flex m-1">
              <label htmlFor="todo" className="form-label">{txtLabel ?? 'Insert a new item'}</label>
              <input ref={Ele} className="form-control m-1" name="ele" id="ele" />
              <button onClick={manageClick} className="btn add-ele btn-primary m-1">{txtButton ?? 'ADD'}</button>
            </div>
          </div>
        </div>
      </form>)
}