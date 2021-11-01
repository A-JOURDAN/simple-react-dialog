import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { getTransition, growContent } from './utils/modal.utils';

const Dialog = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 200ms ease-in-out;
  pointer-events: none;

  &::before {
    background-color: ${(props) =>
      props.hideOverlay ? 'none' : props.overlayColor};
    content: '';
    display: block;
    opacity: ${(props) => props.overlayOpacity};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &.show {
    opacity: 1;
    pointer-events: visible;
  }

  &.exit {
    opacity: 0;
  }

  &.enter-done {
    opacity: 1;
    pointer-events: visible;

    .dialog-content {
      transform: ${(props) => getTransition(props.transition).transitionEnd};
    }
  }

  .dialog-content {
    transform: ${(props) => getTransition(props.transition).transitionStart};
    transition: all 200ms ease-in-out;
    min-height: ${(props) => (props.fullscreen ? '100%' : 'none')};
    min-width: ${(props) => (props.fullscreen ? '100%' : 'none')};
    max-height: ${(props) => (props.fullscreen ? 'none' : '90%')};
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    border-radius: ${(props) => props.contentRadius};
    transform-origin: ${(props) => props.origin};

    &--active {
      &:first-child {
        transform: scale(1.075);
        transition: all 100ms ease;
      }
    }
  }
`;

export const SimpleReactDialog = (props) => {
  // close Modal on press Escape
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if (e.keyCode === 27) {
        props.onClose();
      }
    };

    if (!props.persistent) {
      document.body.addEventListener('keydown', closeOnEscapeKeyDown);
      return () => {
        document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      };
    }
  }, [props]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.value}
      unmountOnExit
      timeout={{ enter: 0, exit: 200 }}
    >
      <Dialog
        onClick={props.persistent ? growContent : props.onClose}
        hideOverlay={props.hideOverlay}
        overlayColor={props.overlayColor}
        overlayOpacity={props.overlayOpacity}
        transition={props.transition}
        contentRadius={props.contentRadius}
        fullscreen={props.fullscreen}
        origin={props.origin}
      >
        <div className='dialog-content' onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </Dialog>
    </CSSTransition>,
    document.getElementById('root'),
  );
};

// Props
SimpleReactDialog.propTypes = {
  value: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  hideOverlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.string,
  contentRadius: PropTypes.string,
  persistent: PropTypes.bool,
  fullscreen: PropTypes.bool,
  transition: PropTypes.oneOf([
    'scale',
    'slide-x',
    'slide-x-revert',
    'slide-y',
    'slide-y-revert',
    'fab',
  ]),
  origin: PropTypes.string,
};

// Default Props
SimpleReactDialog.defaultProps = {
  hideOverlay: false,
  overlayColor: '#000',
  overlayOpacity: '0.4',
  contentRadius: '4px',
  persistent: false,
  fullscreen: false,
  transition: 'scale',
  origin: 'center',
};
