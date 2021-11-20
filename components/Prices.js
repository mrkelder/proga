import dynamic from 'next/dynamic'
import { useEffect, createRef } from 'react'
import Heading from 'components/Heading'
import { useDispatch } from 'react-redux'

const cards = [
  {
    title: 'Сайт-визитка',
    text:
      'Сайт-визитка - это самый простой сайт, содержащий сведения о компании. В сочетании с рекламой в интернете - это самый надежный способ привлечения новых клиентов для Вашего бизнеса!',
    pluses: [
      'Срок создания 7 дней',
      'Разработка уникального дизайна',
      'Форма обратной связи для клиентов',
      'Интеграция с поисковыми системами'
    ],
    price: '$500'
  },
  {
    title: 'Интернет-магазин',
    text:
      'Продажи в интернете с каждым днем составляют все большую долю рынка. Мы предоставляем создание эффективных продающих интернет-магазинов под ключ!',
    pluses: [
      'Срок создания от 30 дней',
      'Настройка и дизайн в соответствии с Вашими пожеланиями',
      'Интеграция с 1С',
      'Интеграция с Яндекс.Маркет а также любыми иными сервисами',
      'Подключение онлайн-оплаты'
    ],
    price: '$1000'
  },
  {
    title: 'Корпоративный сайт',
    text:
      'Когда Ваша компания нуждается в удобной и надежной системе обработки информации!',
    pluses: [
      'Срок создания от 30 дней',
      'Многофункциональный сайт под различные нужды',
      'Интеграция с корпоративным ПО',
      'Модернизация, расширение функционала действующих сайтов',
      'Сайты для органов государственной власти'
    ],
    price: '$1000'
  },
  {
    title: 'Ваш уникальный проект',
    text:
      'Если вам не подошли другие предложения и у вас есть своя собственная идея, мы поможем её реализовать!',
    pluses: [
      'Уникальный дизайн',
      'Настройка сайта под любые нужды',
      'Интеграция с любыми онлайн-сервисами',
      'Наивысший уровень безопасности данных'
    ],
    price: 'Договорная',
    fS: '32px'
  }
]

const PriceCard = dynamic(() => import('components/PriceCard'))

function Prices ({ setVisibility }) {
  const element = createRef()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'links/changeRef',
      payload: { name: 'prices', ref: element }
    })
  }, [element, dispatch])

  return (
    <div>
      <Heading
        h2='цены'
        ref={element}
        text='Готовые решения или Ваш индивидуальный проект'
      />
      {cards.map(service => (
        <PriceCard key={service.title} {...{ ...service, setVisibility }} />
      ))}
    </div>
  )
}

export default Prices
