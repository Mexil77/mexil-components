import clsx from 'clsx'
import styles from './styles.module.scss'
import { ReactNode, useState } from 'react'
import { Category, Ticket } from '../../types'

type MxTreeCardProps = { loading?: boolean; data: Category[] }

export function MxTreeCard({ loading = false, data }: MxTreeCardProps) {
  const [showTree, setShowTree] = useState<Category[]>(data)

  const styleTreeCard = clsx(styles.mxtreecard, {
    [styles['mxtreecard--loading']]: loading,
  })
  const styleTreeCardCategories = clsx(styles.mxtreecard__categories, {})
  const styleTreeCardCategoriesCategory = clsx(
    styles.mxtreecard__categories__category,
    {}
  )
  const styleTreeCardCategoriesCategoryActive = clsx(
    styles.mxtreecard__categories__category__active,
    {}
  )
  const styleTreeCardTitle = clsx(styles.mxtreecard__title, {})
  const styleTreeCardTitleSpend = clsx(styles.mxtreecard__title__spend, {})
  const styleTreeCardTitleRest = clsx(styles.mxtreecard__title__rest, {})
  const styleTreeCardContent = clsx(styles.mxtreecard__content, {})
  const styleTreeCardContentRow = clsx(styles.mxtreecard__content__row, {})

  const activeRecursiveNewPath = (categories: Category[], path: string[]) => {
    return categories.map((category: Category) => {
      if (category.name === path[0]) {
        category.childs = activeRecursiveNewPath(category.childs, path.slice(1))
        category.active = true
      }
      return category
    })
  }

  const recursiveClear = (categories: Category[]) => {
    return categories.map((category: Category) => {
      category.childs = category.active
        ? recursiveClear(category.childs)
        : category.childs
      category.active = false
      return category
    })
  }

  const manageCategoryClick = (path: string) => {
    const cleanState = recursiveClear(showTree)
    const newPathState = activeRecursiveNewPath(cleanState, path.split('/'))
    setShowTree(newPathState)
  }

  const printTikets = (tickets: Ticket[]): ReactNode => {
    return (
      <div className={styleTreeCardContent}>
        {tickets.map((ticket: Ticket, idx: number) => (
          <div
            key={`${ticket.description}-${idx}`}
            className={styleTreeCardContentRow}
          >
            <h2>{ticket.description}</h2>
            <h2>€{ticket.spend}</h2>
          </div>
        ))}
      </div>
    )
  }

  const printCardTree = (categories: Category[], prefix: string): ReactNode => {
    const activeCategory = categories.find(
      (category: Category) => category.active
    )
    const divCategories = categories.map((category: Category, idx: number) => {
      const path = prefix === '' ? category.name : `${prefix}/${category.name}`
      return (
        <div
          className={`${styleTreeCardCategoriesCategory} ${category.active && styleTreeCardCategoriesCategoryActive}`}
          key={`category.name-${idx}`}
          onClick={() => manageCategoryClick(path)}
          style={{ backgroundColor: category.color }}
        >
          <h3>{category.name}</h3>
        </div>
      )
    })

    return (
      <>
        <div className={styleTreeCardCategories}>
          {divCategories.map((divCategory: ReactNode) => divCategory)}
        </div>
        {activeCategory && (
          <>
            <div
              className={styleTreeCardTitle}
              style={{ backgroundColor: `${activeCategory.color}30` }}
            >
              <h1>€{activeCategory.total}</h1>
              <h2 className={styleTreeCardTitleRest}>€{activeCategory.rest}</h2>
              <h2 className={styleTreeCardTitleSpend}>
                €{activeCategory.spend}
              </h2>
            </div>
            {activeCategory.childs.length > 0 ? (
              printCardTree(
                activeCategory.childs,
                prefix === ''
                  ? activeCategory.name
                  : `${prefix}/${activeCategory.name}`
              )
            ) : activeCategory.tickets.length > 0 ? (
              printTikets(activeCategory.tickets)
            ) : (
              <></>
            )}
          </>
        )}
      </>
    )
  }

  return loading ? (
    <div>loading</div>
  ) : (
    <div className={styleTreeCard}>{printCardTree(showTree, '')}</div>
  )
}
