// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  AnimatedView
}                     from '../../components';

class Pipeline extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      enterPipeline: PropTypes.func,
      leavePipeline: PropTypes.func
    })
  };

  componentWillMount() {
    const { actions: { enterPipeline } } = this.props;
    enterPipeline();
  }

  componentWillUnmount() {
    const { actions: { leavePipeline } } = this.props;
    leavePipeline();
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-lg-6">
            <Pipeline />
          </div>

          <div className="col-lg-6">
            <section className="panel">
              <header className="panel-heading">
                Horizontal Forms
              </header>
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  role="form">
                  <div className="form-group">
                    <label
                      htmlFor="inputEmail1"
                      className="col-lg-2 col-sm-2 control-label">
                      Email
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail1"
                        placeholder="Email"
                      />
                      <p className="help-block">
                        Example block-level help text here.
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="inputPassword1"
                      className="col-lg-2 col-sm-2 control-label">
                      Password
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" />
                           Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <button type="submit" className="btn btn-danger">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section className="panel">
              <div className="panel-body">
                <a
                  href="#myModalBasicElements"
                  data-toggle="modal"
                  className="btn btn-xs btn-success">
                  Form in Modal
                </a>
                <a
                  href="#myModalBasicElements-1"
                  data-toggle="modal"
                  className="btn btn-xs btn-warning">
                  Form in Modal 2
                </a>
                <a
                  href="#myModalBasicElements-2"
                  data-toggle="modal"
                  className="btn btn-xs btn-danger">
                  Form in Modal 3
                </a>
              </div>
            </section>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default Pipeline;
