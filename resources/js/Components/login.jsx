import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <Layout>
            <Head title="Login" />

            <form onSubmit={submit}>
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
                    <label>
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        Remember me
                    </label>
                </div>

                <button type="submit" disabled={processing}>Login</button>
            </form>
        </Layout>
    );
}
