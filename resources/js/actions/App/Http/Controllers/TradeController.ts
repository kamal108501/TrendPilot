import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/trades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TradeController::index
 * @see app/Http/Controllers/TradeController.php:15
 * @route '/trades'
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
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/trades/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TradeController::create
 * @see app/Http/Controllers/TradeController.php:35
 * @route '/trades/create'
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
* @see \App\Http\Controllers\TradeController::store
 * @see app/Http/Controllers/TradeController.php:47
 * @route '/trades'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/trades',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TradeController::store
 * @see app/Http/Controllers/TradeController.php:47
 * @route '/trades'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::store
 * @see app/Http/Controllers/TradeController.php:47
 * @route '/trades'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TradeController::store
 * @see app/Http/Controllers/TradeController.php:47
 * @route '/trades'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TradeController::store
 * @see app/Http/Controllers/TradeController.php:47
 * @route '/trades'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
export const show = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/trades/{trade}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
show.url = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { trade: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    trade: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        trade: args.trade,
                }

    return show.definition.url
            .replace('{trade}', parsedArgs.trade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
show.get = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
show.head = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
    const showForm = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
        showForm.get = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TradeController::show
 * @see app/Http/Controllers/TradeController.php:102
 * @route '/trades/{trade}'
 */
        showForm.head = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
export const edit = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/trades/{trade}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
edit.url = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { trade: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    trade: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        trade: args.trade,
                }

    return edit.definition.url
            .replace('{trade}', parsedArgs.trade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
edit.get = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
edit.head = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
    const editForm = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
        editForm.get = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TradeController::edit
 * @see app/Http/Controllers/TradeController.php:114
 * @route '/trades/{trade}/edit'
 */
        editForm.head = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
export const update = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/trades/{trade}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
update.url = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { trade: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    trade: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        trade: args.trade,
                }

    return update.definition.url
            .replace('{trade}', parsedArgs.trade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
update.put = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
update.patch = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
    const updateForm = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
        updateForm.put = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TradeController::update
 * @see app/Http/Controllers/TradeController.php:128
 * @route '/trades/{trade}'
 */
        updateForm.patch = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TradeController::destroy
 * @see app/Http/Controllers/TradeController.php:184
 * @route '/trades/{trade}'
 */
export const destroy = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/trades/{trade}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TradeController::destroy
 * @see app/Http/Controllers/TradeController.php:184
 * @route '/trades/{trade}'
 */
destroy.url = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { trade: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    trade: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        trade: args.trade,
                }

    return destroy.definition.url
            .replace('{trade}', parsedArgs.trade.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TradeController::destroy
 * @see app/Http/Controllers/TradeController.php:184
 * @route '/trades/{trade}'
 */
destroy.delete = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TradeController::destroy
 * @see app/Http/Controllers/TradeController.php:184
 * @route '/trades/{trade}'
 */
    const destroyForm = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TradeController::destroy
 * @see app/Http/Controllers/TradeController.php:184
 * @route '/trades/{trade}'
 */
        destroyForm.delete = (args: { trade: string | number } | [trade: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const TradeController = { index, create, store, show, edit, update, destroy }

export default TradeController