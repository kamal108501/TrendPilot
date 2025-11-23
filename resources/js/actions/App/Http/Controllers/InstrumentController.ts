import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/instruments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstrumentController::index
 * @see app/Http/Controllers/InstrumentController.php:14
 * @route '/instruments'
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
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/instruments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstrumentController::create
 * @see app/Http/Controllers/InstrumentController.php:24
 * @route '/instruments/create'
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
* @see \App\Http\Controllers\InstrumentController::store
 * @see app/Http/Controllers/InstrumentController.php:32
 * @route '/instruments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/instruments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InstrumentController::store
 * @see app/Http/Controllers/InstrumentController.php:32
 * @route '/instruments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::store
 * @see app/Http/Controllers/InstrumentController.php:32
 * @route '/instruments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\InstrumentController::store
 * @see app/Http/Controllers/InstrumentController.php:32
 * @route '/instruments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::store
 * @see app/Http/Controllers/InstrumentController.php:32
 * @route '/instruments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
export const show = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/instruments/{instrument}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
show.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instrument: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    instrument: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instrument: args.instrument,
                }

    return show.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
show.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
show.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
    const showForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
        showForm.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstrumentController::show
 * @see app/Http/Controllers/InstrumentController.php:55
 * @route '/instruments/{instrument}'
 */
        showForm.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
export const edit = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/instruments/{instrument}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
edit.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instrument: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    instrument: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instrument: args.instrument,
                }

    return edit.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
edit.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
edit.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
    const editForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
        editForm.get = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InstrumentController::edit
 * @see app/Http/Controllers/InstrumentController.php:67
 * @route '/instruments/{instrument}/edit'
 */
        editForm.head = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
export const update = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/instruments/{instrument}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
update.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instrument: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    instrument: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instrument: args.instrument,
                }

    return update.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
update.put = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
update.patch = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
    const updateForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
        updateForm.put = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\InstrumentController::update
 * @see app/Http/Controllers/InstrumentController.php:77
 * @route '/instruments/{instrument}'
 */
        updateForm.patch = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InstrumentController::destroy
 * @see app/Http/Controllers/InstrumentController.php:97
 * @route '/instruments/{instrument}'
 */
export const destroy = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/instruments/{instrument}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InstrumentController::destroy
 * @see app/Http/Controllers/InstrumentController.php:97
 * @route '/instruments/{instrument}'
 */
destroy.url = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { instrument: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    instrument: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        instrument: args.instrument,
                }

    return destroy.definition.url
            .replace('{instrument}', parsedArgs.instrument.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InstrumentController::destroy
 * @see app/Http/Controllers/InstrumentController.php:97
 * @route '/instruments/{instrument}'
 */
destroy.delete = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\InstrumentController::destroy
 * @see app/Http/Controllers/InstrumentController.php:97
 * @route '/instruments/{instrument}'
 */
    const destroyForm = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\InstrumentController::destroy
 * @see app/Http/Controllers/InstrumentController.php:97
 * @route '/instruments/{instrument}'
 */
        destroyForm.delete = (args: { instrument: string | number } | [instrument: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const InstrumentController = { index, create, store, show, edit, update, destroy }

export default InstrumentController