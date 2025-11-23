import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/strategies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StrategyController::index
 * @see app/Http/Controllers/StrategyController.php:14
 * @route '/strategies'
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
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/strategies/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StrategyController::create
 * @see app/Http/Controllers/StrategyController.php:26
 * @route '/strategies/create'
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
* @see \App\Http\Controllers\StrategyController::store
 * @see app/Http/Controllers/StrategyController.php:34
 * @route '/strategies'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/strategies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StrategyController::store
 * @see app/Http/Controllers/StrategyController.php:34
 * @route '/strategies'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::store
 * @see app/Http/Controllers/StrategyController.php:34
 * @route '/strategies'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StrategyController::store
 * @see app/Http/Controllers/StrategyController.php:34
 * @route '/strategies'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StrategyController::store
 * @see app/Http/Controllers/StrategyController.php:34
 * @route '/strategies'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
export const show = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/strategies/{strategy}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
show.url = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { strategy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    strategy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        strategy: args.strategy,
                }

    return show.definition.url
            .replace('{strategy}', parsedArgs.strategy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
show.get = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
show.head = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
    const showForm = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
        showForm.get = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StrategyController::show
 * @see app/Http/Controllers/StrategyController.php:59
 * @route '/strategies/{strategy}'
 */
        showForm.head = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
export const edit = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/strategies/{strategy}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
edit.url = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { strategy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    strategy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        strategy: args.strategy,
                }

    return edit.definition.url
            .replace('{strategy}', parsedArgs.strategy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
edit.get = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
edit.head = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
    const editForm = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
        editForm.get = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StrategyController::edit
 * @see app/Http/Controllers/StrategyController.php:71
 * @route '/strategies/{strategy}/edit'
 */
        editForm.head = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
export const update = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/strategies/{strategy}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
update.url = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { strategy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    strategy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        strategy: args.strategy,
                }

    return update.definition.url
            .replace('{strategy}', parsedArgs.strategy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
update.put = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
update.patch = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
    const updateForm = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
        updateForm.put = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\StrategyController::update
 * @see app/Http/Controllers/StrategyController.php:83
 * @route '/strategies/{strategy}'
 */
        updateForm.patch = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StrategyController::destroy
 * @see app/Http/Controllers/StrategyController.php:103
 * @route '/strategies/{strategy}'
 */
export const destroy = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/strategies/{strategy}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StrategyController::destroy
 * @see app/Http/Controllers/StrategyController.php:103
 * @route '/strategies/{strategy}'
 */
destroy.url = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { strategy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    strategy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        strategy: args.strategy,
                }

    return destroy.definition.url
            .replace('{strategy}', parsedArgs.strategy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StrategyController::destroy
 * @see app/Http/Controllers/StrategyController.php:103
 * @route '/strategies/{strategy}'
 */
destroy.delete = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StrategyController::destroy
 * @see app/Http/Controllers/StrategyController.php:103
 * @route '/strategies/{strategy}'
 */
    const destroyForm = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StrategyController::destroy
 * @see app/Http/Controllers/StrategyController.php:103
 * @route '/strategies/{strategy}'
 */
        destroyForm.delete = (args: { strategy: string | number } | [strategy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const strategies = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default strategies