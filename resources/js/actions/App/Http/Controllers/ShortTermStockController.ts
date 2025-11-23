import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/short_term_stocks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShortTermStockController::index
 * @see app/Http/Controllers/ShortTermStockController.php:14
 * @route '/short_term_stocks'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/short_term_stocks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShortTermStockController::create
 * @see app/Http/Controllers/ShortTermStockController.php:27
 * @route '/short_term_stocks/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\ShortTermStockController::store
 * @see app/Http/Controllers/ShortTermStockController.php:35
 * @route '/short_term_stocks'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/short_term_stocks',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::store
 * @see app/Http/Controllers/ShortTermStockController.php:35
 * @route '/short_term_stocks'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::store
 * @see app/Http/Controllers/ShortTermStockController.php:35
 * @route '/short_term_stocks'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::store
 * @see app/Http/Controllers/ShortTermStockController.php:35
 * @route '/short_term_stocks'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::store
 * @see app/Http/Controllers/ShortTermStockController.php:35
 * @route '/short_term_stocks'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
export const show = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/short_term_stocks/{short_term_stock}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
show.url = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { short_term_stock: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    short_term_stock: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        short_term_stock: args.short_term_stock,
                }

    return show.definition.url
            .replace('{short_term_stock}', parsedArgs.short_term_stock.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
show.get = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
show.head = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
    const showForm = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
        showForm.get = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShortTermStockController::show
 * @see app/Http/Controllers/ShortTermStockController.php:0
 * @route '/short_term_stocks/{short_term_stock}'
 */
        showForm.head = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
export const edit = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/short_term_stocks/{short_term_stock}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
edit.url = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { short_term_stock: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    short_term_stock: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        short_term_stock: args.short_term_stock,
                }

    return edit.definition.url
            .replace('{short_term_stock}', parsedArgs.short_term_stock.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
edit.get = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
edit.head = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
    const editForm = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
        editForm.get = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShortTermStockController::edit
 * @see app/Http/Controllers/ShortTermStockController.php:58
 * @route '/short_term_stocks/{short_term_stock}/edit'
 */
        editForm.head = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
export const update = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/short_term_stocks/{short_term_stock}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
update.url = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { short_term_stock: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    short_term_stock: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        short_term_stock: args.short_term_stock,
                }

    return update.definition.url
            .replace('{short_term_stock}', parsedArgs.short_term_stock.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
update.put = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
update.patch = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
    const updateForm = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
        updateForm.put = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ShortTermStockController::update
 * @see app/Http/Controllers/ShortTermStockController.php:70
 * @route '/short_term_stocks/{short_term_stock}'
 */
        updateForm.patch = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ShortTermStockController::destroy
 * @see app/Http/Controllers/ShortTermStockController.php:96
 * @route '/short_term_stocks/{short_term_stock}'
 */
export const destroy = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/short_term_stocks/{short_term_stock}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ShortTermStockController::destroy
 * @see app/Http/Controllers/ShortTermStockController.php:96
 * @route '/short_term_stocks/{short_term_stock}'
 */
destroy.url = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { short_term_stock: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    short_term_stock: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        short_term_stock: args.short_term_stock,
                }

    return destroy.definition.url
            .replace('{short_term_stock}', parsedArgs.short_term_stock.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShortTermStockController::destroy
 * @see app/Http/Controllers/ShortTermStockController.php:96
 * @route '/short_term_stocks/{short_term_stock}'
 */
destroy.delete = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ShortTermStockController::destroy
 * @see app/Http/Controllers/ShortTermStockController.php:96
 * @route '/short_term_stocks/{short_term_stock}'
 */
    const destroyForm = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ShortTermStockController::destroy
 * @see app/Http/Controllers/ShortTermStockController.php:96
 * @route '/short_term_stocks/{short_term_stock}'
 */
        destroyForm.delete = (args: { short_term_stock: string | number } | [short_term_stock: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ShortTermStockController = { index, create, store, show, edit, update, destroy }

export default ShortTermStockController