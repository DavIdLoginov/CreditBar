import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import {motion} from 'framer-motion'



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Создай свои условия',
    paragraph: `Вы нужны нам, а мы нужны вам! Наш сайт нужен для упрощения получения кредита клиентам, возьми все в свои руки! Чем же мы хороши?`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.8,
              delay: 0.01,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
          
          className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <svg alt="Features tile icon 01" width={64} height={64} xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path stroke="#FFF" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"/><path d="M43 42h-9M43 37h-9" stroke="#ACADFF"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Время деньги
                    </h4>
                  <p className="m-0 text-sm">
                  Мы поможем найти в короткие сроки выгодный кредит! Надо получать оброзование? Надо снять офис? Не трать время, возьми кредит, инвистируй в себя!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path stroke="#FFF" d="M21 23h22v18H21z"/><path d="M26 28h12M26 32h12M26 36h5" stroke="#ACADFF"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Безопасность
                    </h4>
                  <p className="m-0 text-sm">
                    Только проверенные организации со всем перечнем документов получают возможность выдачи/получения кредита!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd"><ellipse stroke="#ACADFF" stroke-linecap="square" cx="32" cy="32" rx="5.5" ry="11"/><path d="M32 21v22M21 32h22" stroke="#FFF"/><circle stroke="#FFF" stroke-linecap="square" cx="32" cy="32" r="11"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Доступность
                    </h4>
                  <p className="m-0 text-sm">
                    Наши услуги актуальны на всей территории Кыргызской Республики!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M39 43v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0033.262 21 9 9 0 0024 30v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" stroke="#FFF"/><circle stroke="#ACADFF" cx="35" cy="30" r="3"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Развитие
                    </h4>
                  <p className="m-0 text-sm">
                    Развивайся вместе с нами! У нас есть кредит на образование, с уровнем образования растет уровень жизни, сделай свою жизнь лучше! 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" stroke="#FFF"/><path stroke="#ACADFF" d="M22 30h4v12h-4z"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Рейтинг доверия 
                    </h4>
                  <p className="m-0 text-sm">
                    Отблагодари хорошей оценкой, или накажи плохой! Система оценка пользователей поможет в выборе партнера!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M38 24v-2M40.121 24.879l1.415-1.415M41 27h2M40.121 29.121l1.415 1.415M38 30v2M35.879 29.121l-1.415 1.415M35 27h-2M35.879 24.879l-1.415-1.415" stroke="#ACADFF"/><circle stroke="#ACADFF" cx="38" cy="27" r="3"/><path d="M29.86 23.18C24.8 23.988 21 27.6 21 32c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L41 43l-.6-5.2a9.125 9.125 0 001.991-2.948" stroke="#FFF"/></g></svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Тех поддержка 24/7
                    </h4>
                  <p className="m-0 text-sm">
                    Не беспокойтесь о работе сайта, в случае какой-либо проблемы пишите нам.
                    </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;