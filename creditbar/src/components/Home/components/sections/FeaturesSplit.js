import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import {motion} from 'framer-motion'


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Глобально о проекте',
    paragraph: 'Расскажем чем проект поможет не только определенной группе лиц, но и всему Кыргызстану, поможем друг другу стать лучше! '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={ {duration: 1}}
            variants={{
              visible: { opacity: 1 , x: [100, 0]},
              hidden: { opacity: 0 },
            }}

            className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Экономика
                  </div>
                <h3 className="mt-0 mb-12">
                  Мы и экономика
                  </h3>
                <p className="m-0">
                  Круговорот денег - как это работает? Чем больше одни люди тратят деньги тем больше денег зарабатывают другие. Фермер может взять кредит на новый трактор, в следующем сезоне получить больше урожая и денег, выплатить кредит и дальше развивать свою жизнь вместе с нами!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={ {duration: 1}}
            variants={{
              visible: {opacity: 1 , x: [-100, 0]},
              hidden: { opacity: 0 },
            }}

            className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Кредит на бизнес
                  </div>
                <h3 className="mt-0 mb-12">
                Мы и Бизнес
                  </h3>
                <p className="m-0">
                  Поможем открыть свой бизнес. Сколько товаров на рынке Кыргызстана являются импортными? Как силльно мы зависим от других стран? Открой бизнес помоги рынку Кыргызстана. Мы поможем начать! 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={ {duration: 1}}
            variants={{
              visible: {opacity: 1 , x: [100, 0]},
              hidden: { opacity: 0 },
            }}
            className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  духовные потребности гражданина кр
                  </div>
                <h3 className="mt-0 mb-12">
                  Мы и духовное развитие
                  </h3>
                <p className="m-0">
                Все что духовно развивает человека и есть духовные потребности. К ним относятся образование, научное исследование, исскуство, походы в кинотеатры/театры/музеи/выставки. Если у нуждающегося художника не будет денег на краски, кисточки мы можем финансово ему помочь, может ведь мировую войну развязать. Мы учитываем ваши духовные потребности! Развивайтесь вместе с нами!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;