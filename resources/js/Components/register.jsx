import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <Layout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    {errors.password_confirmation && <div>{errors.password_confirmation}</div>}
                </div>

                <button type="submit" disabled={processing}>Register</button>
            </form>
        </Layout>
    );
}
